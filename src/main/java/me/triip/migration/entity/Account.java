package me.triip.migration.entity;

import org.bson.types.ObjectId;

import dev.morphia.annotations.Entity;
import dev.morphia.annotations.Id;

@Entity("accounts")
public class Account {

    @Id
    private ObjectId id;
    private String balanceNumber;
    private String hash;
    private String balance;
    private WalletType walletType = WalletType.NORMAL;

    public enum WalletType {
        NORMAL, CONTRACT, ERROR
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getBalanceNumber() {
        return balanceNumber;
    }

    public void setBalanceNumber(String balanceNumber) {
        this.balanceNumber = balanceNumber;
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    public WalletType getWalletType() {
        return walletType;
    }

    public void setWalletType(WalletType walletType) {
        this.walletType = walletType;
    }

    public static final class AccountBuilder {
        private ObjectId id;
        private String balanceNumber;
        private String hash;
        private String balance;
        private WalletType walletType;

        private AccountBuilder() {
        }

        public static AccountBuilder anAccount() {
            return new AccountBuilder();
        }

        public AccountBuilder withId(ObjectId id) {
            this.id = id;
            return this;
        }

        public AccountBuilder withBalanceNumber(String balanceNumber) {
            this.balanceNumber = balanceNumber;
            return this;
        }

        public AccountBuilder withHash(String hash) {
            this.hash = hash;
            return this;
        }

        public AccountBuilder withBalance(String balance) {
            this.balance = balance;
            return this;
        }

        public AccountBuilder withWalletType(WalletType walletType) {
            this.walletType = walletType;
            return this;
        }

        public Account build() {
            Account account = new Account();
            account.setId(id);
            account.setBalanceNumber(balanceNumber);
            account.setHash(hash);
            account.setBalance(balance);
            account.setWalletType(walletType);
            return account;
        }
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Account{");
        sb.append("id=").append(id);
        sb.append(", balanceNumber='").append(balanceNumber).append('\'');
        sb.append(", hash='").append(hash).append('\'');
        sb.append(", balance='").append(balance).append('\'');
        sb.append(", walletType=").append(walletType);
        sb.append('}');
        return sb.toString();
    }
}
