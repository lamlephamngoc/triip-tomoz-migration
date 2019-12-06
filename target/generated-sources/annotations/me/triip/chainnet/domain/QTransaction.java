package me.triip.chainnet.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTransaction is a Querydsl query type for Transaction
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTransaction extends EntityPathBase<Transaction> {

    private static final long serialVersionUID = 435419604L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTransaction transaction = new QTransaction("transaction");

    public final StringPath blockHash = createString("blockHash");

    public final NumberPath<Integer> blockNumber = createNumber("blockNumber", Integer.class);

    public final EnumPath<me.triip.chainnet.domain.enumeration.CallbackStatus> callbackStatus = createEnum("callbackStatus", me.triip.chainnet.domain.enumeration.CallbackStatus.class);

    public final StringPath fromAddress = createString("fromAddress");

    public final NumberPath<java.math.BigInteger> gasPrice = createNumber("gasPrice", java.math.BigInteger.class);

    public final NumberPath<java.math.BigInteger> gasUsed = createNumber("gasUsed", java.math.BigInteger.class);

    public final StringPath hash = createString("hash");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<me.triip.chainnet.domain.enumeration.Network> network = createEnum("network", me.triip.chainnet.domain.enumeration.Network.class);

    public final NumberPath<java.math.BigInteger> nonce = createNumber("nonce", java.math.BigInteger.class);

    public final StringPath toAddress = createString("toAddress");

    public final QTransferEvent transferEvent;

    public final NumberPath<java.math.BigInteger> value = createNumber("value", java.math.BigInteger.class);

    public QTransaction(String variable) {
        this(Transaction.class, forVariable(variable), INITS);
    }

    public QTransaction(Path<? extends Transaction> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTransaction(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTransaction(PathMetadata metadata, PathInits inits) {
        this(Transaction.class, metadata, inits);
    }

    public QTransaction(Class<? extends Transaction> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.transferEvent = inits.isInitialized("transferEvent") ? new QTransferEvent(forProperty("transferEvent"), inits.get("transferEvent")) : null;
    }

}

