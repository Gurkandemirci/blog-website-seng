package com.example.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {


    @Autowired
    private UserRepository usersRepository;

    public List<User> getAllUsers() {return usersRepository.findAll();}

}
