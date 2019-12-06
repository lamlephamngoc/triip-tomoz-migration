package me.triip.migration.steps;


import java.util.List;

import com.mongodb.MongoClient;
import dev.morphia.Datastore;
import dev.morphia.Morphia;
import me.triip.migration.entity.Account;
import me.triip.migration.experiment.MigrationUtils;

public class AccountTypeChecker {

    public static Morphia morphia;
    public static Datastore datastore;

    {
        morphia = new Morphia().mapPackage("me.triip.token");
        datastore = morphia.createDatastore(new MongoClient("localhost:27017"), "siro_01");
    }

    public static final String CONTRACT_CHECKER_ADDRESS = "0xec6fdad06a6a431c622757ba0aca6e2fb7d6f13d";

    public static void main(String[] args) {
        List<Account> accounts = new AccountTypeChecker().getWalletBalanceGreaterThanZero();

        try {
            MigrationUtils.typeChecker(accounts);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Account> getWalletBalanceGreaterThanZero() {
        return datastore.createQuery(Account.class).asList();
    }
}
