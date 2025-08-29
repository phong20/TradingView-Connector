"use strict";
((exports.id = 401),
  (exports.ids = [401]),
  (exports.modules = {
    33597: (S, E, T) => {
      (T.r(E),
        T.d(E, {
          AWSECSLAUNCHTYPEVALUES_EC2: () => _.kQ,
          AWSECSLAUNCHTYPEVALUES_FARGATE: () => _.qd,
          AwsEcsLaunchtypeValues: () => _._t,
          CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS: () => _.M0,
          CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC: () => _.oD,
          CLOUDPLATFORMVALUES_AWS_EC2: () => _.$F,
          CLOUDPLATFORMVALUES_AWS_ECS: () => _.Tf,
          CLOUDPLATFORMVALUES_AWS_EKS: () => _.I_,
          CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK: () => _.Tm,
          CLOUDPLATFORMVALUES_AWS_LAMBDA: () => _.$H,
          CLOUDPLATFORMVALUES_AZURE_AKS: () => _.ZK,
          CLOUDPLATFORMVALUES_AZURE_APP_SERVICE: () => _.Zw,
          CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES: () => _.Ed,
          CLOUDPLATFORMVALUES_AZURE_FUNCTIONS: () => _.wT,
          CLOUDPLATFORMVALUES_AZURE_VM: () => _.jj,
          CLOUDPLATFORMVALUES_GCP_APP_ENGINE: () => _.He,
          CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS: () => _.ZV,
          CLOUDPLATFORMVALUES_GCP_CLOUD_RUN: () => _.M7,
          CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE: () => _.nC,
          CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE: () => _.Ce,
          CLOUDPROVIDERVALUES_ALIBABA_CLOUD: () => _.pX,
          CLOUDPROVIDERVALUES_AWS: () => _.By,
          CLOUDPROVIDERVALUES_AZURE: () => _.uQ,
          CLOUDPROVIDERVALUES_GCP: () => _.$6,
          CloudPlatformValues: () => _.CY,
          CloudProviderValues: () => _.LH,
          DBCASSANDRACONSISTENCYLEVELVALUES_ALL: () => A.JYm,
          DBCASSANDRACONSISTENCYLEVELVALUES_ANY: () => A.r2B,
          DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM: () => A.d1C,
          DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE: () => A.Bnr,
          DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM: () => A.KeR,
          DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL: () => A.mlE,
          DBCASSANDRACONSISTENCYLEVELVALUES_ONE: () => A.b3_,
          DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM: () => A.KYp,
          DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL: () => A.n3u,
          DBCASSANDRACONSISTENCYLEVELVALUES_THREE: () => A.b8v,
          DBCASSANDRACONSISTENCYLEVELVALUES_TWO: () => A.CzP,
          DBSYSTEMVALUES_ADABAS: () => A.rTH,
          DBSYSTEMVALUES_CACHE: () => A.L9O,
          DBSYSTEMVALUES_CASSANDRA: () => A.L_1,
          DBSYSTEMVALUES_CLOUDSCAPE: () => A.$Wr,
          DBSYSTEMVALUES_COCKROACHDB: () => A.YUC,
          DBSYSTEMVALUES_COLDFUSION: () => A.T60,
          DBSYSTEMVALUES_COSMOSDB: () => A.xav,
          DBSYSTEMVALUES_COUCHBASE: () => A.Cgu,
          DBSYSTEMVALUES_COUCHDB: () => A.Tw_,
          DBSYSTEMVALUES_DB2: () => A.uWf,
          DBSYSTEMVALUES_DERBY: () => A.wo7,
          DBSYSTEMVALUES_DYNAMODB: () => A.o0N,
          DBSYSTEMVALUES_EDB: () => A.zWg,
          DBSYSTEMVALUES_ELASTICSEARCH: () => A.LRS,
          DBSYSTEMVALUES_FILEMAKER: () => A.wPe,
          DBSYSTEMVALUES_FIREBIRD: () => A.c7L,
          DBSYSTEMVALUES_FIRSTSQL: () => A.TDq,
          DBSYSTEMVALUES_GEODE: () => A.AOT,
          DBSYSTEMVALUES_H2: () => A.tML,
          DBSYSTEMVALUES_HANADB: () => A.Mmr,
          DBSYSTEMVALUES_HBASE: () => A.Ssu,
          DBSYSTEMVALUES_HIVE: () => A.lap,
          DBSYSTEMVALUES_HSQLDB: () => A.EJe,
          DBSYSTEMVALUES_INFORMIX: () => A._Zt,
          DBSYSTEMVALUES_INGRES: () => A.NS1,
          DBSYSTEMVALUES_INSTANTDB: () => A.R3Y,
          DBSYSTEMVALUES_INTERBASE: () => A.dY9,
          DBSYSTEMVALUES_MARIADB: () => A.ARC,
          DBSYSTEMVALUES_MAXDB: () => A.xQV,
          DBSYSTEMVALUES_MEMCACHED: () => A.NTc,
          DBSYSTEMVALUES_MONGODB: () => A.SeY,
          DBSYSTEMVALUES_MSSQL: () => A.BI2,
          DBSYSTEMVALUES_MYSQL: () => A.LDm,
          DBSYSTEMVALUES_NEO4J: () => A.lBX,
          DBSYSTEMVALUES_NETEZZA: () => A.WN5,
          DBSYSTEMVALUES_ORACLE: () => A.DY0,
          DBSYSTEMVALUES_OTHER_SQL: () => A.aRT,
          DBSYSTEMVALUES_PERVASIVE: () => A.je9,
          DBSYSTEMVALUES_POINTBASE: () => A.wi2,
          DBSYSTEMVALUES_POSTGRESQL: () => A.QqV,
          DBSYSTEMVALUES_PROGRESS: () => A.Opc,
          DBSYSTEMVALUES_REDIS: () => A.oFo,
          DBSYSTEMVALUES_REDSHIFT: () => A.A3w,
          DBSYSTEMVALUES_SQLITE: () => A.W6R,
          DBSYSTEMVALUES_SYBASE: () => A.k6u,
          DBSYSTEMVALUES_TERADATA: () => A.nbz,
          DBSYSTEMVALUES_VERTICA: () => A.T_e,
          DbCassandraConsistencyLevelValues: () => A.xMl,
          DbSystemValues: () => A.fLT,
          FAASDOCUMENTOPERATIONVALUES_DELETE: () => A.KtE,
          FAASDOCUMENTOPERATIONVALUES_EDIT: () => A.W1f,
          FAASDOCUMENTOPERATIONVALUES_INSERT: () => A.Ou_,
          FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD: () => A.SGQ,
          FAASINVOKEDPROVIDERVALUES_AWS: () => A.pOY,
          FAASINVOKEDPROVIDERVALUES_AZURE: () => A.ISb,
          FAASINVOKEDPROVIDERVALUES_GCP: () => A.Gwh,
          FAASTRIGGERVALUES_DATASOURCE: () => A.s9h,
          FAASTRIGGERVALUES_HTTP: () => A.b6Q,
          FAASTRIGGERVALUES_OTHER: () => A.fks,
          FAASTRIGGERVALUES_PUBSUB: () => A.qf_,
          FAASTRIGGERVALUES_TIMER: () => A.P$Q,
          FaasDocumentOperationValues: () => A.ZIo,
          FaasInvokedProviderValues: () => A.o0s,
          FaasTriggerValues: () => A.iD2,
          HOSTARCHVALUES_AMD64: () => _.oV,
          HOSTARCHVALUES_ARM32: () => _.R2,
          HOSTARCHVALUES_ARM64: () => _.GW,
          HOSTARCHVALUES_IA64: () => _.Sf,
          HOSTARCHVALUES_PPC32: () => _.Co,
          HOSTARCHVALUES_PPC64: () => _.bE,
          HOSTARCHVALUES_X86: () => _.vo,
          HTTPFLAVORVALUES_HTTP_1_0: () => A.w3z,
          HTTPFLAVORVALUES_HTTP_1_1: () => A.kB,
          HTTPFLAVORVALUES_HTTP_2_0: () => A.w_Y,
          HTTPFLAVORVALUES_QUIC: () => A.dQt,
          HTTPFLAVORVALUES_SPDY: () => A.iHd,
          HostArchValues: () => _.IV,
          HttpFlavorValues: () => A.Yid,
          MESSAGETYPEVALUES_RECEIVED: () => A.Fa5,
          MESSAGETYPEVALUES_SENT: () => A.Ckk,
          MESSAGINGDESTINATIONKINDVALUES_QUEUE: () => A.OrI,
          MESSAGINGDESTINATIONKINDVALUES_TOPIC: () => A.BZ9,
          MESSAGINGOPERATIONVALUES_PROCESS: () => A.gQR,
          MESSAGINGOPERATIONVALUES_RECEIVE: () => A.iIR,
          MessageTypeValues: () => A._JS,
          MessagingDestinationKindValues: () => A.y89,
          MessagingOperationValues: () => A.jUs,
          NETHOSTCONNECTIONSUBTYPEVALUES_CDMA: () => A.gIA,
          NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT: () => A.iNz,
          NETHOSTCONNECTIONSUBTYPEVALUES_EDGE: () => A.U8S,
          NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD: () => A.m86,
          NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0: () => A._7S,
          NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A: () => A.wM_,
          NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B: () => A.Jxp,
          NETHOSTCONNECTIONSUBTYPEVALUES_GPRS: () => A.GM8,
          NETHOSTCONNECTIONSUBTYPEVALUES_GSM: () => A.Urx,
          NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA: () => A.tTL,
          NETHOSTCONNECTIONSUBTYPEVALUES_HSPA: () => A.R6O,
          NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP: () => A.IUx,
          NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA: () => A.lq9,
          NETHOSTCONNECTIONSUBTYPEVALUES_IDEN: () => A.$EH,
          NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN: () => A.uA8,
          NETHOSTCONNECTIONSUBTYPEVALUES_LTE: () => A.Gdv,
          NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA: () => A.$_t,
          NETHOSTCONNECTIONSUBTYPEVALUES_NR: () => A.iR1,
          NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA: () => A.CWW,
          NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA: () => A.KHW,
          NETHOSTCONNECTIONSUBTYPEVALUES_UMTS: () => A.fNF,
          NETHOSTCONNECTIONTYPEVALUES_CELL: () => A.$A7,
          NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE: () => A.jTi,
          NETHOSTCONNECTIONTYPEVALUES_UNKNOWN: () => A.zOJ,
          NETHOSTCONNECTIONTYPEVALUES_WIFI: () => A.iYs,
          NETHOSTCONNECTIONTYPEVALUES_WIRED: () => A.mQ5,
          NETTRANSPORTVALUES_INPROC: () => A.AAq,
          NETTRANSPORTVALUES_IP: () => A.cko,
          NETTRANSPORTVALUES_IP_TCP: () => A.TSv,
          NETTRANSPORTVALUES_IP_UDP: () => A.s$E,
          NETTRANSPORTVALUES_OTHER: () => A.huK,
          NETTRANSPORTVALUES_PIPE: () => A.buh,
          NETTRANSPORTVALUES_UNIX: () => A.cxu,
          NetHostConnectionSubtypeValues: () => A.oPk,
          NetHostConnectionTypeValues: () => A.ZM5,
          NetTransportValues: () => A.DiP,
          OSTYPEVALUES_AIX: () => _.$X,
          OSTYPEVALUES_DARWIN: () => _.GR,
          OSTYPEVALUES_DRAGONFLYBSD: () => _.HH,
          OSTYPEVALUES_FREEBSD: () => _.sl,
          OSTYPEVALUES_HPUX: () => _.d$,
          OSTYPEVALUES_LINUX: () => _.YU,
          OSTYPEVALUES_NETBSD: () => _.Hj,
          OSTYPEVALUES_OPENBSD: () => _.L2,
          OSTYPEVALUES_SOLARIS: () => _.tj,
          OSTYPEVALUES_WINDOWS: () => _._H,
          OSTYPEVALUES_Z_OS: () => _.Wn,
          OsTypeValues: () => _.er,
          RPCGRPCSTATUSCODEVALUES_ABORTED: () => A.D$8,
          RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS: () => A.HpP,
          RPCGRPCSTATUSCODEVALUES_CANCELLED: () => A.I76,
          RPCGRPCSTATUSCODEVALUES_DATA_LOSS: () => A.MFQ,
          RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED: () => A.Jic,
          RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION: () => A.fTj,
          RPCGRPCSTATUSCODEVALUES_INTERNAL: () => A.imF,
          RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT: () => A.R5B,
          RPCGRPCSTATUSCODEVALUES_NOT_FOUND: () => A.ZkD,
          RPCGRPCSTATUSCODEVALUES_OK: () => A.$ep,
          RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE: () => A.hTQ,
          RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED: () => A.I5C,
          RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED: () => A.BwG,
          RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED: () => A.wI0,
          RPCGRPCSTATUSCODEVALUES_UNAVAILABLE: () => A.YXb,
          RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED: () => A.j6o,
          RPCGRPCSTATUSCODEVALUES_UNKNOWN: () => A.i8c,
          RpcGrpcStatusCodeValues: () => A.yG$,
          SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET: () => A.AFn,
          SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: () => A.JYd,
          SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ: () => A.uRW,
          SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY: () => A.Kpn,
          SEMATTRS_AWS_DYNAMODB_COUNT: () => A.alJ,
          SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE: () => A.MTY,
          SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: () => A.OTt,
          SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: () => A.qO7,
          SEMATTRS_AWS_DYNAMODB_INDEX_NAME: () => A.qGp,
          SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS: () => A.PK2,
          SEMATTRS_AWS_DYNAMODB_LIMIT: () => A.HBi,
          SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: () => A.lBR,
          SEMATTRS_AWS_DYNAMODB_PROJECTION: () => A.hHC,
          SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: () => A.v9j,
          SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: () => A.kO6,
          SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT: () => A.rME,
          SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD: () => A.MU2,
          SEMATTRS_AWS_DYNAMODB_SEGMENT: () => A.nKl,
          SEMATTRS_AWS_DYNAMODB_SELECT: () => A.qM_,
          SEMATTRS_AWS_DYNAMODB_TABLE_COUNT: () => A.akt,
          SEMATTRS_AWS_DYNAMODB_TABLE_NAMES: () => A.kPD,
          SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS: () => A.n3K,
          SEMATTRS_AWS_LAMBDA_INVOKED_ARN: () => A.MTv,
          SEMATTRS_CODE_FILEPATH: () => A.Iip,
          SEMATTRS_CODE_FUNCTION: () => A.PGq,
          SEMATTRS_CODE_LINENO: () => A.fQ4,
          SEMATTRS_CODE_NAMESPACE: () => A.KTF,
          SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL: () => A.XxW,
          SEMATTRS_DB_CASSANDRA_COORDINATOR_DC: () => A.L08,
          SEMATTRS_DB_CASSANDRA_COORDINATOR_ID: () => A.FQ3,
          SEMATTRS_DB_CASSANDRA_IDEMPOTENCE: () => A.rGV,
          SEMATTRS_DB_CASSANDRA_KEYSPACE: () => A.Cn2,
          SEMATTRS_DB_CASSANDRA_PAGE_SIZE: () => A.Hl$,
          SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: () => A.pJT,
          SEMATTRS_DB_CASSANDRA_TABLE: () => A.aP6,
          SEMATTRS_DB_CONNECTION_STRING: () => A.pys,
          SEMATTRS_DB_HBASE_NAMESPACE: () => A.I1I,
          SEMATTRS_DB_JDBC_DRIVER_CLASSNAME: () => A.meL,
          SEMATTRS_DB_MONGODB_COLLECTION: () => A.BCN,
          SEMATTRS_DB_MSSQL_INSTANCE_NAME: () => A.wr,
          SEMATTRS_DB_NAME: () => A.WoE,
          SEMATTRS_DB_OPERATION: () => A.P_p,
          SEMATTRS_DB_REDIS_DATABASE_INDEX: () => A.TP7,
          SEMATTRS_DB_SQL_TABLE: () => A.TMe,
          SEMATTRS_DB_STATEMENT: () => A.PAL,
          SEMATTRS_DB_SYSTEM: () => A.UBq,
          SEMATTRS_DB_USER: () => A.A49,
          SEMATTRS_ENDUSER_ID: () => A.Eln,
          SEMATTRS_ENDUSER_ROLE: () => A.Lrb,
          SEMATTRS_ENDUSER_SCOPE: () => A.cm9,
          SEMATTRS_EXCEPTION_ESCAPED: () => A.yEy,
          SEMATTRS_EXCEPTION_MESSAGE: () => A.WTV,
          SEMATTRS_EXCEPTION_STACKTRACE: () => A.Wji,
          SEMATTRS_EXCEPTION_TYPE: () => A.qvI,
          SEMATTRS_FAAS_COLDSTART: () => A.qW_,
          SEMATTRS_FAAS_CRON: () => A.L4f,
          SEMATTRS_FAAS_DOCUMENT_COLLECTION: () => A.HOQ,
          SEMATTRS_FAAS_DOCUMENT_NAME: () => A.Bfq,
          SEMATTRS_FAAS_DOCUMENT_OPERATION: () => A.RP5,
          SEMATTRS_FAAS_DOCUMENT_TIME: () => A.Uld,
          SEMATTRS_FAAS_EXECUTION: () => A.OQQ,
          SEMATTRS_FAAS_INVOKED_NAME: () => A.OlO,
          SEMATTRS_FAAS_INVOKED_PROVIDER: () => A.y6A,
          SEMATTRS_FAAS_INVOKED_REGION: () => A.xCm,
          SEMATTRS_FAAS_TIME: () => A.bYJ,
          SEMATTRS_FAAS_TRIGGER: () => A.tNv,
          SEMATTRS_HTTP_CLIENT_IP: () => A.rh7,
          SEMATTRS_HTTP_FLAVOR: () => A.QtL,
          SEMATTRS_HTTP_HOST: () => A.oMZ,
          SEMATTRS_HTTP_METHOD: () => A.ACM,
          SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH: () => A.buQ,
          SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: () => A.n7U,
          SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH: () => A.ynx,
          SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: () => A.ljJ,
          SEMATTRS_HTTP_ROUTE: () => A.XOM,
          SEMATTRS_HTTP_SCHEME: () => A.BM2,
          SEMATTRS_HTTP_SERVER_NAME: () => A.VZx,
          SEMATTRS_HTTP_STATUS_CODE: () => A.LZ1,
          SEMATTRS_HTTP_TARGET: () => A.YOJ,
          SEMATTRS_HTTP_URL: () => A.aVl,
          SEMATTRS_HTTP_USER_AGENT: () => A.kXj,
          SEMATTRS_MESSAGE_COMPRESSED_SIZE: () => A.QJo,
          SEMATTRS_MESSAGE_ID: () => A.zMd,
          SEMATTRS_MESSAGE_TYPE: () => A.koK,
          SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE: () => A.U8R,
          SEMATTRS_MESSAGING_CONSUMER_ID: () => A.d3J,
          SEMATTRS_MESSAGING_CONVERSATION_ID: () => A.PqE,
          SEMATTRS_MESSAGING_DESTINATION: () => A.cnS,
          SEMATTRS_MESSAGING_DESTINATION_KIND: () => A.Uvq,
          SEMATTRS_MESSAGING_KAFKA_CLIENT_ID: () => A.A2_,
          SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP: () => A.w3E,
          SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY: () => A.gdG,
          SEMATTRS_MESSAGING_KAFKA_PARTITION: () => A.f3y,
          SEMATTRS_MESSAGING_KAFKA_TOMBSTONE: () => A.hlN,
          SEMATTRS_MESSAGING_MESSAGE_ID: () => A.XCP,
          SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: () => A.vRE,
          SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: () => A.P_D,
          SEMATTRS_MESSAGING_OPERATION: () => A.a4k,
          SEMATTRS_MESSAGING_PROTOCOL: () => A.Guc,
          SEMATTRS_MESSAGING_PROTOCOL_VERSION: () => A.KPM,
          SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY: () => A.KLJ,
          SEMATTRS_MESSAGING_SYSTEM: () => A.aY_,
          SEMATTRS_MESSAGING_TEMP_DESTINATION: () => A.Ce5,
          SEMATTRS_MESSAGING_URL: () => A.LBf,
          SEMATTRS_NET_HOST_CARRIER_ICC: () => A.X$c,
          SEMATTRS_NET_HOST_CARRIER_MCC: () => A.EoW,
          SEMATTRS_NET_HOST_CARRIER_MNC: () => A.eks,
          SEMATTRS_NET_HOST_CARRIER_NAME: () => A.uGh,
          SEMATTRS_NET_HOST_CONNECTION_SUBTYPE: () => A.y2p,
          SEMATTRS_NET_HOST_CONNECTION_TYPE: () => A.kNf,
          SEMATTRS_NET_HOST_IP: () => A.l08,
          SEMATTRS_NET_HOST_NAME: () => A.ncu,
          SEMATTRS_NET_HOST_PORT: () => A.uyu,
          SEMATTRS_NET_PEER_IP: () => A.r4G,
          SEMATTRS_NET_PEER_NAME: () => A.K_1,
          SEMATTRS_NET_PEER_PORT: () => A.ylQ,
          SEMATTRS_NET_TRANSPORT: () => A.AuT,
          SEMATTRS_PEER_SERVICE: () => A.bhq,
          SEMATTRS_RPC_GRPC_STATUS_CODE: () => A.Dp0,
          SEMATTRS_RPC_JSONRPC_ERROR_CODE: () => A.ff0,
          SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE: () => A.N6Y,
          SEMATTRS_RPC_JSONRPC_REQUEST_ID: () => A.Dxf,
          SEMATTRS_RPC_JSONRPC_VERSION: () => A.wyN,
          SEMATTRS_RPC_METHOD: () => A.mNX,
          SEMATTRS_RPC_SERVICE: () => A.Pl4,
          SEMATTRS_RPC_SYSTEM: () => A.VxV,
          SEMATTRS_THREAD_ID: () => A.ZUr,
          SEMATTRS_THREAD_NAME: () => A.hvJ,
          SEMRESATTRS_AWS_ECS_CLUSTER_ARN: () => _.Sl,
          SEMRESATTRS_AWS_ECS_CONTAINER_ARN: () => _.Wl,
          SEMRESATTRS_AWS_ECS_LAUNCHTYPE: () => _.gd,
          SEMRESATTRS_AWS_ECS_TASK_ARN: () => _.WK,
          SEMRESATTRS_AWS_ECS_TASK_FAMILY: () => _.L1,
          SEMRESATTRS_AWS_ECS_TASK_REVISION: () => _.d0,
          SEMRESATTRS_AWS_EKS_CLUSTER_ARN: () => _.kT,
          SEMRESATTRS_AWS_LOG_GROUP_ARNS: () => _.Q4,
          SEMRESATTRS_AWS_LOG_GROUP_NAMES: () => _.Ht,
          SEMRESATTRS_AWS_LOG_STREAM_ARNS: () => _.bu,
          SEMRESATTRS_AWS_LOG_STREAM_NAMES: () => _.uO,
          SEMRESATTRS_CLOUD_ACCOUNT_ID: () => _.js,
          SEMRESATTRS_CLOUD_AVAILABILITY_ZONE: () => _.sz,
          SEMRESATTRS_CLOUD_PLATFORM: () => _.Wv,
          SEMRESATTRS_CLOUD_PROVIDER: () => _.Xt,
          SEMRESATTRS_CLOUD_REGION: () => _.sN,
          SEMRESATTRS_CONTAINER_ID: () => _.aO,
          SEMRESATTRS_CONTAINER_IMAGE_NAME: () => _.W_,
          SEMRESATTRS_CONTAINER_IMAGE_TAG: () => _.M_,
          SEMRESATTRS_CONTAINER_NAME: () => _.Wb,
          SEMRESATTRS_CONTAINER_RUNTIME: () => _.Qb,
          SEMRESATTRS_DEPLOYMENT_ENVIRONMENT: () => _.jT,
          SEMRESATTRS_DEVICE_ID: () => _.Y8,
          SEMRESATTRS_DEVICE_MODEL_IDENTIFIER: () => _.AS,
          SEMRESATTRS_DEVICE_MODEL_NAME: () => _.bo,
          SEMRESATTRS_FAAS_ID: () => _.YN,
          SEMRESATTRS_FAAS_INSTANCE: () => _.cr,
          SEMRESATTRS_FAAS_MAX_MEMORY: () => _.Xc,
          SEMRESATTRS_FAAS_NAME: () => _.iv,
          SEMRESATTRS_FAAS_VERSION: () => _.v,
          SEMRESATTRS_HOST_ARCH: () => _.g,
          SEMRESATTRS_HOST_ID: () => _.OJ,
          SEMRESATTRS_HOST_IMAGE_ID: () => _.fG,
          SEMRESATTRS_HOST_IMAGE_NAME: () => _.wG,
          SEMRESATTRS_HOST_IMAGE_VERSION: () => _.Kw,
          SEMRESATTRS_HOST_NAME: () => _.vm,
          SEMRESATTRS_HOST_TYPE: () => _.CR,
          SEMRESATTRS_K8S_CLUSTER_NAME: () => _.Ks,
          SEMRESATTRS_K8S_CONTAINER_NAME: () => _.Ms,
          SEMRESATTRS_K8S_CRONJOB_NAME: () => _.sQ,
          SEMRESATTRS_K8S_CRONJOB_UID: () => _.gP,
          SEMRESATTRS_K8S_DAEMONSET_NAME: () => _.z4,
          SEMRESATTRS_K8S_DAEMONSET_UID: () => _.LZ,
          SEMRESATTRS_K8S_DEPLOYMENT_NAME: () => _.Dh,
          SEMRESATTRS_K8S_DEPLOYMENT_UID: () => _.mv,
          SEMRESATTRS_K8S_JOB_NAME: () => _.Gv,
          SEMRESATTRS_K8S_JOB_UID: () => _.Ii,
          SEMRESATTRS_K8S_NAMESPACE_NAME: () => _.zo,
          SEMRESATTRS_K8S_NODE_NAME: () => _.Ej,
          SEMRESATTRS_K8S_NODE_UID: () => _.rp,
          SEMRESATTRS_K8S_POD_NAME: () => _.Ih,
          SEMRESATTRS_K8S_POD_UID: () => _.D7,
          SEMRESATTRS_K8S_REPLICASET_NAME: () => _.kB,
          SEMRESATTRS_K8S_REPLICASET_UID: () => _.po,
          SEMRESATTRS_K8S_STATEFULSET_NAME: () => _.uX,
          SEMRESATTRS_K8S_STATEFULSET_UID: () => _.HZ,
          SEMRESATTRS_OS_DESCRIPTION: () => _.zh,
          SEMRESATTRS_OS_NAME: () => _.RV,
          SEMRESATTRS_OS_TYPE: () => _.Nb,
          SEMRESATTRS_OS_VERSION: () => _.V7,
          SEMRESATTRS_PROCESS_COMMAND: () => _.CA,
          SEMRESATTRS_PROCESS_COMMAND_ARGS: () => _.hg,
          SEMRESATTRS_PROCESS_COMMAND_LINE: () => _.Pl,
          SEMRESATTRS_PROCESS_EXECUTABLE_NAME: () => _.xH,
          SEMRESATTRS_PROCESS_EXECUTABLE_PATH: () => _.GH,
          SEMRESATTRS_PROCESS_OWNER: () => _.XT,
          SEMRESATTRS_PROCESS_PID: () => _.P_,
          SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION: () => _.$C,
          SEMRESATTRS_PROCESS_RUNTIME_NAME: () => _.QG,
          SEMRESATTRS_PROCESS_RUNTIME_VERSION: () => _.uR,
          SEMRESATTRS_SERVICE_INSTANCE_ID: () => _.sC,
          SEMRESATTRS_SERVICE_NAME: () => _.Ze,
          SEMRESATTRS_SERVICE_NAMESPACE: () => _.te,
          SEMRESATTRS_SERVICE_VERSION: () => _.Yt,
          SEMRESATTRS_TELEMETRY_AUTO_VERSION: () => _.qj,
          SEMRESATTRS_TELEMETRY_SDK_LANGUAGE: () => _.Ft,
          SEMRESATTRS_TELEMETRY_SDK_NAME: () => _.d_,
          SEMRESATTRS_TELEMETRY_SDK_VERSION: () => _.AX,
          SEMRESATTRS_WEBENGINE_DESCRIPTION: () => _.$7,
          SEMRESATTRS_WEBENGINE_NAME: () => _.QH,
          SEMRESATTRS_WEBENGINE_VERSION: () => _.TL,
          SemanticAttributes: () => A.ogj,
          SemanticResourceAttributes: () => _.R9,
          TELEMETRYSDKLANGUAGEVALUES_CPP: () => _.HB,
          TELEMETRYSDKLANGUAGEVALUES_DOTNET: () => _.SG,
          TELEMETRYSDKLANGUAGEVALUES_ERLANG: () => _.lE,
          TELEMETRYSDKLANGUAGEVALUES_GO: () => _.iK,
          TELEMETRYSDKLANGUAGEVALUES_JAVA: () => _.kC,
          TELEMETRYSDKLANGUAGEVALUES_NODEJS: () => _.jC,
          TELEMETRYSDKLANGUAGEVALUES_PHP: () => _.ov,
          TELEMETRYSDKLANGUAGEVALUES_PYTHON: () => _.sI,
          TELEMETRYSDKLANGUAGEVALUES_RUBY: () => _.ao,
          TELEMETRYSDKLANGUAGEVALUES_WEBJS: () => _.L7,
          TelemetrySdkLanguageValues: () => _.Te,
        }));
      var A = T(69193),
        _ = T(70106);
    },
    93401: function (S, E, T) {
      var A =
        (this && this.__importDefault) ||
        function (S) {
          return S && S.__esModule ? S : { default: S };
        };
      (Object.defineProperty(E, "__esModule", { value: !0 }),
        (E.FetchInstrumentation = void 0));
      const _ = A(T(65714)),
        R = T(33597),
        N = T(18364);
      function O(S) {
        return S instanceof AggregateError
          ? S.errors.map((S) => S.message).join(", ")
          : S.message;
      }
      function M(S) {
        const E = "content-length";
        for (let T = 0; T < S.length; T += 2) {
          const A = S[T];
          if (A.length === E.length && A.toString().toLowerCase() === E) {
            const E = Number(S[T + 1]);
            return Number.isNaN(Number(E)) ? void 0 : E;
          }
        }
      }
      async function C() {
        try {
          await fetch("");
        } catch (S) {}
      }
      class L {
        channelSubs;
        spanFromReq = new WeakMap();
        tracer;
        config;
        meter;
        instrumentationName = "opentelemetry-instrumentation-node-18-fetch";
        instrumentationVersion = "1.0.0";
        instrumentationDescription =
          "Instrumentation for Node 18 fetch via diagnostics_channel";
        subscribeToChannel(S, E) {
          const T = _.default.channel(S);
          (T.subscribe(E),
            this.channelSubs.push({ name: S, channel: T, onMessage: E }));
        }
        constructor(S) {
          (C(),
            (this.channelSubs = []),
            (this.meter = N.metrics.getMeter(
              this.instrumentationName,
              this.instrumentationVersion,
            )),
            (this.tracer = N.trace.getTracer(
              this.instrumentationName,
              this.instrumentationVersion,
            )),
            (this.config = { ...S }));
        }
        disable() {
          this.channelSubs?.forEach((S) => S.channel.unsubscribe(S.onMessage));
        }
        enable() {
          (this.subscribeToChannel("undici:request:create", (S) =>
            this.onRequest(S),
          ),
            this.subscribeToChannel("undici:request:headers", (S) =>
              this.onHeaders(S),
            ),
            this.subscribeToChannel("undici:request:trailers", (S) =>
              this.onDone(S),
            ),
            this.subscribeToChannel("undici:request:error", (S) =>
              this.onError(S),
            ));
        }
        setTracerProvider(S) {
          this.tracer = S.getTracer(
            this.instrumentationName,
            this.instrumentationVersion,
          );
        }
        setMeterProvider(S) {
          this.meter = S.getMeter(
            this.instrumentationName,
            this.instrumentationVersion,
          );
        }
        setConfig(S) {
          this.config = { ...S };
        }
        getConfig() {
          return this.config;
        }
        onRequest({ request: S }) {
          if ("CONNECT" === S.method) return;
          if (
            this.config.ignoreRequestHook &&
            !0 === this.config.ignoreRequestHook(S)
          )
            return;
          const E = this.tracer.startSpan(`HTTP ${S.method}`, {
              kind: N.SpanKind.CLIENT,
              attributes: {
                [R.SemanticAttributes.HTTP_URL]: D(S.origin, S.path),
                [R.SemanticAttributes.HTTP_METHOD]: S.method,
                [R.SemanticAttributes.HTTP_TARGET]: S.path,
                "http.client": "fetch",
              },
            }),
            T = N.trace.setSpan(N.context.active(), E),
            A = {};
          (N.propagation.inject(T, A),
            this.config.onRequest &&
              this.config.onRequest({
                request: S,
                span: E,
                additionalHeaders: A,
              }),
            Array.isArray(S.headers)
              ? S.headers.push(...Object.entries(A).flat())
              : (S.headers += Object.entries(A)
                  .map(([S, E]) => `${S}: ${E}\r\n`)
                  .join("")),
            this.spanFromReq.set(S, E));
        }
        onHeaders({ request: S, response: E }) {
          const T = this.spanFromReq.get(S);
          if (void 0 !== T) {
            const S = M(E.headers),
              A = { [R.SemanticAttributes.HTTP_STATUS_CODE]: E.statusCode };
            (S && (A[R.SemanticAttributes.HTTP_RESPONSE_CONTENT_LENGTH] = S),
              T.setAttributes(A),
              T.setStatus({
                code:
                  E.statusCode >= 400
                    ? N.SpanStatusCode.ERROR
                    : N.SpanStatusCode.OK,
                message: String(E.statusCode),
              }));
          }
        }
        onDone({ request: S }) {
          const E = this.spanFromReq.get(S);
          void 0 !== E && (E.end(), this.spanFromReq.delete(S));
        }
        onError({ request: S, error: E }) {
          const T = this.spanFromReq.get(S);
          void 0 !== T &&
            (T.recordException(E),
            T.setStatus({ code: N.SpanStatusCode.ERROR, message: O(E) }),
            T.end());
        }
      }
      function D(S, E = "/") {
        const T = `${S}`;
        return S.endsWith("/") && E.startsWith("/")
          ? `${T}${E.slice(1)}`
          : S.endsWith("/") || E.startsWith("/")
            ? `${T}${E}`
            : `${T}/${E.slice(1)}`;
      }
      E.FetchInstrumentation = L;
    },
  }));
