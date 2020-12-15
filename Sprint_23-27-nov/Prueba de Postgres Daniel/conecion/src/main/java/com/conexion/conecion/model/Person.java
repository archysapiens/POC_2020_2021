package com.conexion.conecion.model;

import javax.persistence.*;
@Entity
public class Person {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(name="idperson")
	    private int idPerson;

	    @Column
	    private String firstName;

	    @Column
	    private String lastName;

		public int getIdPerson() {
			return idPerson;
		}

		public void setIdPerson(int idPerson) {
			this.idPerson = idPerson;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}


}
