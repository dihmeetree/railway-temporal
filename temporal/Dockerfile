FROM temporalio/auto-setup:1.22.2

ARG DB DBNAME DB_PORT POSTGRES_USER POSTGRES_PWD POSTGRES_SEEDS

COPY dynamic.yaml /etc/temporal/config/dynamicconfig/dynamic.yaml

ENV DYNAMIC_CONFIG_FILE_PATH="config/dynamicconfig/dynamic.yaml"
ENV BIND_ON_IP="0.0.0.0"
ENV TEMPORAL_BROADCAST_ADDRESS="127.0.0.1"
