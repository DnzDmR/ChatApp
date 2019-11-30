package com.service.chatroom.repository;

import com.service.chatroom.entity.Users;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<Users,ObjectId> {

    Optional<Users> findByUsername(String username);
    void deleteUserByUsername(String username);
}
