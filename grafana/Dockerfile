FROM grafana/grafana-oss:latest

COPY ./provisioning /etc/grafana/provisioning
COPY ./config.ini /etc/grafana/config.ini
COPY ./dashboards /var/lib/grafana/dashboards

ENV \
    GF_INSTALL_PLUGINS=grafana-piechart-panel,grafana-worldmap-panel,grafana-clock-panel,grafana-simple-json-datasource