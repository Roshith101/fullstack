package com.eventmanagement.roshith.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_GuestDetails")
public class GuestDetails {

    @Id
    private int id;

    private String g_name;

    private String address;

    private String Status; //vip or vvip

    private int mobile; 

    private String email;

}