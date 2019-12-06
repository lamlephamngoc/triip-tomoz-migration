package me.triip.chainnet.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTransferEvent is a Querydsl query type for TransferEvent
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTransferEvent extends EntityPathBase<TransferEvent> {

    private static final long serialVersionUID = -659732763L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTransferEvent transferEvent = new QTransferEvent("transferEvent");

    public final StringPath fromAddress = createString("fromAddress");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath toAddress = createString("toAddress");

    public final QTransaction transaction;

    public final NumberPath<java.math.BigDecimal> value = createNumber("value", java.math.BigDecimal.class);

    public QTransferEvent(String variable) {
        this(TransferEvent.class, forVariable(variable), INITS);
    }

    public QTransferEvent(Path<? extends TransferEvent> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTransferEvent(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTransferEvent(PathMetadata metadata, PathInits inits) {
        this(TransferEvent.class, metadata, inits);
    }

    public QTransferEvent(Class<? extends TransferEvent> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.transaction = inits.isInitialized("transaction") ? new QTransaction(forProperty("transaction"), inits.get("transaction")) : null;
    }

}

