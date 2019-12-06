package me.triip.migration.experiment;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.http.HttpService;

import com.google.gson.Gson;
import me.triip.migration.Network;


public class Web3jConnectionTest {

    private static final Logger log = LoggerFactory.getLogger(Web3jConnectionTest.class);
    final static Web3j web3 = Web3j.build(new HttpService(Network.TOMO_MAINNET.endpoint()));
    private static final Gson gson = new Gson();

    public static void main(String[] args)  throws Exception {

        new Web3jConnectionTest().TestWeb3();

    }

    public void TestWeb3() throws Exception{
        final String transactionHash = "0x15faccbd03d79fb3a889be0e421673995376c938a45c3bb5085d7fdd9be26626";

        TransactionReceipt transactionReceipt = web3.ethGetTransactionReceipt(transactionHash).send().getTransactionReceipt().get();

        log.info("transactionReceipt : {}", gson.toJson(transactionReceipt));
    }
}
