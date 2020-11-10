package com.tutorial1.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class PersonaServiceImp implements PersonaService {

	@Autowired
	private PersonaRepo repositorio;
	@Override
	public List<Persona> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

	@Override
	public Persona listarId(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}