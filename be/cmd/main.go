package main

import (
	"crypto/tls"
	"log"
	"net/http"
	"os"

	"go.uber.org/zap"

	controller "github.com/TeaPartyCrypto/partybridge/be/pkg"
)

func main() {
	c := &controller.Controller{}
	// create a new sugard logger
	var err error
	c.Log, err = zap.NewProduction()
	if err != nil {
		log.Fatal(err)
		return
	}
	certFilePath := os.Getenv("CERT_FILE_PATH")
	if certFilePath == "" {
		certFilePath = "/app/cert/tls.crt"
	}
	keyFilePath := os.Getenv("KEY_FILE_PATH")
	if keyFilePath == "" {
		keyFilePath = "/app/cert/tls.key"
	}

	if c.SAASAddress == "" {
		c.SAASAddress = "http://143.42.111.52:8080"
		// c.SAASAddress = "http://192.168.50.90:8080"
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/", c.RootHandler)
	mux.HandleFunc("/requestbridge", c.RequestBridge)

	// Always start HTTP server on port 80
	httpServer := &http.Server{
		Addr:    ":80",
		Handler: mux,
	}

	go func() {
		log.Println("Starting HTTP server on port 80")
		if err := httpServer.ListenAndServe(); err != nil {
			log.Fatalf("failed to start HTTP server: %v", err)
		}
	}()

	// Load the server's certificate and private key
	cert, err := tls.LoadX509KeyPair(certFilePath, keyFilePath)
	if err != nil {
		log.Printf("failed to load certificate and key: %v. HTTPS server will not be started.", err)
		return
	}

	// start HTTPS server if certificate and key are loaded successfully
	httpsServer := &http.Server{
		Addr:    ":443",
		Handler: mux,
		TLSConfig: &tls.Config{
			// In production, you might want to set MinVersion and CipherSuites
			// to ensure that clients connect with strong protocols and ciphers.
			// Consult the crypto/tls package docs for details.
			Certificates: []tls.Certificate{cert},
		},
	}
	log.Println("Starting HTTPS server on port 443")
	if err := httpsServer.ListenAndServeTLS("", ""); err != nil {
		log.Fatalf("failed to start HTTPS server: %v", err)
	}
}
