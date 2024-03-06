package com.eventmanagement.roshith.model;

import java.util.Date;

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
@Table(name = "PaymentDetails")
public class PaymentDetails {

    @Id
    private int id;

    private int payment_id;

    private int payer_id;

    private int amount;

    private Date date;

    private String Description;

}