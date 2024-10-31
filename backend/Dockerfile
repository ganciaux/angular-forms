FROM openjdk:17
WORKDIR /app
COPY out/artifacts/forms_jar/forms.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]