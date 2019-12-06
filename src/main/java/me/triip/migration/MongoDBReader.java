package me.triip.migration;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import me.triip.migration.entity.Account;

class MongoDBReader {

    public List<Account> getAllWallet() {

        List<Account> wallets = new ArrayList<>();

        MongoClient mongoClient = new MongoClient("localhost", 27017);

        MongoDatabase database = mongoClient.getDatabase("TIIMTokenHolder_2019_09_07__001");


        MongoCollection<Document> accounts = database.getCollection("accounts");

        return wallets;
    }
}
