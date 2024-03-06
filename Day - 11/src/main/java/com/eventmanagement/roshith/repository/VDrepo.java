package com.eventmanagement.roshith.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventmanagement.roshith.model.VenueDetails;;

@Repository
public interface VDrepo extends JpaRepository<VenueDetails, Integer> {
    // @Query("SELECT l FROM VDdetails l WHERE l.food_ = :cuisine")

}
