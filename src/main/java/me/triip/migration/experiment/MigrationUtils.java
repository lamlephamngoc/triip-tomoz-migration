package me.triip.migration.experiment;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.gas.ContractGasProvider;
import org.web3j.tx.gas.StaticGasProvider;

import me.triip.migration.Network;
import me.triip.migration.entity.Account;
import me.triip.token.migration.ContractChecker_sol_ContractChecker;

public class MigrationUtils {

    final static Web3j web3 = Web3j.build(new HttpService(Network.TOMO_MAINNET.endpoint()));
    final static Credentials credentials = Credentials.create("293659D6B9AEE4C3F4AC48592735626D88C6CFFD761ACCBF8725CF9DB3EE501D");
    final static ContractGasProvider gasProvider = new StaticGasProvider(new BigInteger("10000000000"), new BigInteger("60000"));
    final static ContractChecker_sol_ContractChecker checker =
            ContractChecker_sol_ContractChecker.load("0xec6fdad06a6a431c622757ba0aca6e2fb7d6f13d", web3, credentials, gasProvider);

    public static List<Account> typeChecker(List<Account> accounts) throws Exception {

        List addressesType = null;
        int n = 1;
        List<String> addresses = new ArrayList<>();
        for (int i = 0; i < accounts.size(); i++) {
            n++;
            Account w = accounts.get(i);
            addresses.add(w.getHash());

            if (n % 10 == 0) {
                try {
                    addressesType = checker.checkBatchAddress(addresses).send();
                } catch (Exception e) {
                    String bb = "";
                    try {

                        for (String a : addresses) {

                            bb = a;
                            SetWalletType(w, (Boolean) checker.checkBatchAddress(Arrays.asList(a)).send().get(0));
                        }
                    } catch (Exception aaa) {
                        System.out.println("!!!!!!!!!! " + bb);
                    }

                }
                for (int j = 0; j < addressesType.size(); j++) {
                    Boolean isContract = (Boolean) addressesType.get(j);
                    SetWalletType(w, isContract);
                }

            }
        }

        return accounts;
    }

    private static void SetWalletType(Account w, Boolean isContract) {
        if (isContract) {
            w.setWalletType(Account.WalletType.CONTRACT);
        } else {
            w.setWalletType(Account.WalletType.NORMAL);
        }
    }
}
