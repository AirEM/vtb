FROM adoptopenjdk/openjdk11:jdk-11.0.5_10-alpine
MAINTAINER baeldung.com
COPY target/vtb-0.0.1-SNAPSHOT.jar vtb.jar
ENTRYPOINT ["java","-jar", "-Duser.timezone=UTC","/vtb.jar"]
