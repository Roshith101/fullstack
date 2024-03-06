package com.eventmanagement.roshith.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VDresponse{
  @Builder.Default
  private String message = " something went worng";
}

