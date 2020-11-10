package com.tutorial1.demo;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface PersonaRepo extends Repository<Persona, Integer> {
	
	List<Persona>findAll();
	
	
	
	
	

	
}
