package com.eventmanagement.roshith.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VDrequest {
    private int id;
    private String name;
    private String location;
    private int price;
}