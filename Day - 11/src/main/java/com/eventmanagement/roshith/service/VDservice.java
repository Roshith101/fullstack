package com.eventmanagement.roshith.service;

import java.util.List;
// import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventmanagement.roshith.model.VenueDetails;
// import com.eventmanagement.roshith.model.User;
// import com.eventmanagement.roshith.repository.BookingRepo;
import com.eventmanagement.roshith.repository.VDrepo;
// import com.eventmanagement.roshith.repository.UsersRepository;

@Service
public class VDservice {
    @Autowired
    VDrepo vdrepo;
   
    // @Autowired
    // UsersRepository urepo;

    public String addEvent(VenueDetails e) {
        vdrepo.save(e);
        return "Event added Successfully";
    }

    public String updateEvent(VenueDetails e) {
        vdrepo.save(e);
        return "event updated succesfully";
    }

    public String deleteEvent(int id) {
        vdrepo.deleteById(id);
        return "deleted Successfully";

    }

    public List<VenueDetails> showevents() {
        return vdrepo.findAll();
    }

    // public List<VenueDetails> showEventsByLocation(String location) {
    //     return vdrepo.findByLocation(location);
    // }

   
}
