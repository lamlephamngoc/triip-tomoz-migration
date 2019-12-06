package me.triip.chainnet.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTokenDistribution is a Querydsl query type for TokenDistribution
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTokenDistribution extends EntityPathBase<TokenDistribution> {

    private static final long serialVersionUID = -2140551789L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTokenDistribution tokenDistribution = new QTokenDistribution("tokenDistribution");

    public final StringPath address = createString("address");

    public final NumberPath<java.math.BigDecimal> amount = createNumber("amount", java.math.BigDecimal.class);

    public final NumberPath<Long> broadcastBlockNo = createNumber("broadcastBlockNo", Long.class);

    public final EnumPath<BroadcastStatus> broadcastStatus = createEnum("broadcastStatus", BroadcastStatus.class);

    public final StringPath callback = createString("callback");

    public final DateTimePath<java.time.Instant> createdAt = createDateTime("createdAt", java.time.Instant.class);

    public final StringPath error = createString("error");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final BooleanPath mined = createBoolean("mined");

    public final StringPath network = createString("network");

    public final NumberPath<Integer> nonce = createNumber("nonce", Integer.class);

    public final NumberPath<Long> receiptBlockNo = createNumber("receiptBlockNo", Long.class);

    public final StringPath signedData = createString("signedData");

    public final StringPath transactionHash = createString("transactionHash");

    public final QTransactionReceipt transactionReceipt;

    public final StringPath tx = createString("tx");

    public final DateTimePath<java.time.Instant> updatedAt = createDateTime("updatedAt", java.time.Instant.class);

    public QTokenDistribution(String variable) {
        this(TokenDistribution.class, forVariable(variable), INITS);
    }

    public QTokenDistribution(Path<? extends TokenDistribution> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTokenDistribution(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTokenDistribution(PathMetadata metadata, PathInits inits) {
        this(TokenDistribution.class, metadata, inits);
    }

    public QTokenDistribution(Class<? extends TokenDistribution> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.transactionReceipt = inits.isInitialized("transactionReceipt") ? new QTransactionReceipt(forProperty("transactionReceipt")) : null;
    }

}

