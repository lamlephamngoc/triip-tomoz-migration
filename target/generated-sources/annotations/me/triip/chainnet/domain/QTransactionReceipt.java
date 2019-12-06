package me.triip.chainnet.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QTransactionReceipt is a Querydsl query type for TransactionReceipt
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTransactionReceipt extends EntityPathBase<TransactionReceipt> {

    private static final long serialVersionUID = 226892228L;

    public static final QTransactionReceipt transactionReceipt = new QTransactionReceipt("transactionReceipt");

    public final StringPath blockHash = createString("blockHash");

    public final NumberPath<Long> blockNumber = createNumber("blockNumber", Long.class);

    public final StringPath from = createString("from");

    public final NumberPath<Long> gasUsed = createNumber("gasUsed", Long.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath to = createString("to");

    public final StringPath transactionHash = createString("transactionHash");

    public final NumberPath<Integer> transactionIndex = createNumber("transactionIndex", Integer.class);

    public QTransactionReceipt(String variable) {
        super(TransactionReceipt.class, forVariable(variable));
    }

    public QTransactionReceipt(Path<? extends TransactionReceipt> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTransactionReceipt(PathMetadata metadata) {
        super(TransactionReceipt.class, metadata);
    }

}

