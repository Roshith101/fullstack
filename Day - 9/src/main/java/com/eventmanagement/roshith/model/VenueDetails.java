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
@Table(name = "PartyDetails")
public class VenueDetails {

    @Id
    private int id;

    private String name;

    private String location;

    private int price;

}