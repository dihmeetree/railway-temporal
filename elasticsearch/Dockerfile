FROM elasticsearch/elasticsearch:7.17.15

ARG ES_JAVA_OPTS="-Xms512m -Xmx512m"
ARG cluster.routing.allocation.disk.threshold_enabled=true
ARG cluster.routing.allocation.disk.watermark.flood_stage=128mb
ARG cluster.routing.allocation.disk.watermark.high=256mb
ARG cluster.routing.allocation.disk.watermark.low=512mb
ARG discovery.type=single-node
ARG xpack.security.enabled=false