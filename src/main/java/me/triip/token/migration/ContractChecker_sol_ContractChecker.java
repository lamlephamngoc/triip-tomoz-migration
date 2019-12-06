package me.triip.token.migration;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Callable;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Bool;
import org.web3j.abi.datatypes.DynamicArray;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;
import org.web3j.tx.gas.ContractGasProvider;

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the 
 * <a href="https://github.com/web3j/web3j/tree/master/codegen">codegen module</a> to update.
 *
 * <p>Generated with web3j version 4.2.0.
 */
public class ContractChecker_sol_ContractChecker extends Contract {
    private static final String BINARY = "608060405234801561001057600080fd5b506101b5806100206000396000f3006080604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663411674388114610045575b600080fd5b34801561005157600080fd5b506040805160206004803580820135838102808601850190965280855261009a953695939460249493850192918291850190849080828437509497506100ea9650505050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156100d65781810151838201526020016100be565b505050509050019250505060405180910390f35b606060008251604051908082528060200260200182016040528015610119578160200160208202803883390190505b509150600090505b82518161ffff16101561017b57610152838261ffff1681518110151561014357fe5b90602001906020020151610181565b828261ffff1681518110151561016457fe5b911515602092830290910190910152600101610121565b50919050565b6000903b11905600a165627a7a72305820ea0ed349048ec7c91919beeebe83e545668264f536147c25f97e2dc678f4686d0029";

    public static final String FUNC_CHECKBATCHADDRESS = "checkBatchAddress";

    @Deprecated
    protected ContractChecker_sol_ContractChecker(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected ContractChecker_sol_ContractChecker(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, credentials, contractGasProvider);
    }

    @Deprecated
    protected ContractChecker_sol_ContractChecker(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    protected ContractChecker_sol_ContractChecker(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public RemoteCall<List> checkBatchAddress(List<String> _addresses) {
        final Function function = new Function(FUNC_CHECKBATCHADDRESS, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.DynamicArray<org.web3j.abi.datatypes.Address>(
                        org.web3j.abi.datatypes.Address.class,
                        org.web3j.abi.Utils.typeMap(_addresses, org.web3j.abi.datatypes.Address.class))), 
                Arrays.<TypeReference<?>>asList(new TypeReference<DynamicArray<Bool>>() {}));
        return new RemoteCall<List>(
                new Callable<List>() {
                    @Override
                    @SuppressWarnings("unchecked")
                    public List call() throws Exception {
                        List<Type> result = (List<Type>) executeCallSingleValueReturn(function, List.class);
                        return convertToNative(result);
                    }
                });
    }

    @Deprecated
    public static ContractChecker_sol_ContractChecker load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new ContractChecker_sol_ContractChecker(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    @Deprecated
    public static ContractChecker_sol_ContractChecker load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new ContractChecker_sol_ContractChecker(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public static ContractChecker_sol_ContractChecker load(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        return new ContractChecker_sol_ContractChecker(contractAddress, web3j, credentials, contractGasProvider);
    }

    public static ContractChecker_sol_ContractChecker load(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return new ContractChecker_sol_ContractChecker(contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public static RemoteCall<ContractChecker_sol_ContractChecker> deploy(Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        return deployRemoteCall(ContractChecker_sol_ContractChecker.class, web3j, credentials, contractGasProvider, BINARY, "");
    }

    @Deprecated
    public static RemoteCall<ContractChecker_sol_ContractChecker> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(ContractChecker_sol_ContractChecker.class, web3j, credentials, gasPrice, gasLimit, BINARY, "");
    }

    public static RemoteCall<ContractChecker_sol_ContractChecker> deploy(Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return deployRemoteCall(ContractChecker_sol_ContractChecker.class, web3j, transactionManager, contractGasProvider, BINARY, "");
    }

    @Deprecated
    public static RemoteCall<ContractChecker_sol_ContractChecker> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(ContractChecker_sol_ContractChecker.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, "");
    }
}
