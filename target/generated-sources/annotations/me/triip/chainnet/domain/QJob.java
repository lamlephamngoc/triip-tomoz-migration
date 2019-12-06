package me.triip.chainnet.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QJob is a Querydsl query type for Job
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QJob extends EntityPathBase<Job> {

    private static final long serialVersionUID = -2033313613L;

    public static final QJob job = new QJob("job");

    public final StringPath address = createString("address");

    public final StringPath callback = createString("callback");

    public final StringPath contractAddress = createString("contractAddress");

    public final NumberPath<Long> currentBlockNumber = createNumber("currentBlockNumber", Long.class);

    public final StringPath errorDescription = createString("errorDescription");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<me.triip.chainnet.domain.enumeration.JobStatus> jobStatus = createEnum("jobStatus", me.triip.chainnet.domain.enumeration.JobStatus.class);

    public final EnumPath<me.triip.chainnet.domain.enumeration.Network> network = createEnum("network", me.triip.chainnet.domain.enumeration.Network.class);

    public final NumberPath<Long> startBlockNumber = createNumber("startBlockNumber", Long.class);

    public QJob(String variable) {
        super(Job.class, forVariable(variable));
    }

    public QJob(Path<? extends Job> path) {
        super(path.getType(), path.getMetadata());
    }

    public QJob(PathMetadata metadata) {
        super(Job.class, metadata);
    }

}

