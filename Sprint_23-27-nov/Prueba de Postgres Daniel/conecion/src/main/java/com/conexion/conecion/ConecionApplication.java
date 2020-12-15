package com.conexion.conecion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import config.Config;

@SpringBootApplication
@Import(Config.class)
public class ConecionApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConecionApplication.class, args);
	}
	
	

}
