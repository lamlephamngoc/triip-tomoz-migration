package me.triip.migration;

public enum Network {
    TOMO_MAINNET("https://rpc.tomochain.com");

    private String endpoint;

    Network(final String endpoint) {
        this.endpoint = endpoint;
    }

    public static Network from(String name) {

        if (name == null || name.length() == 0) return null;

        for (Network net : Network.values()) {
            if (net.toString().equals(name.toUpperCase()))
                return net;
        }
        return null;
    }

    public String endpoint() {
        return this.endpoint;
    }

}
