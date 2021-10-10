package com.airem.vtb.service.inner.graphql;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class DataProviderGraphQlService {

    @Value("${graphql.urn}")
    private String url;

    public DataDto process(Long dataSetId) {

        WebClient webClient = WebClient.builder().build();

        GraphqlRequestBody graphQLRequestBody = new GraphqlRequestBody();

        String query = getSchemaFromFileName("process");
        String variables = getSchemaFromFileName("varitables");

        graphQLRequestBody.setQuery(query);
        graphQLRequestBody.setVariables(variables.replace("dataSetId", String.valueOf(dataSetId)));

        return webClient.post()
                .uri(url)
                .bodyValue(graphQLRequestBody)
                .retrieve()
                .bodyToMono(DataDto.class)
                .block();

    }

    private  String getSchemaFromFileName(final String filename) {
        try {
            return new String(
                    DataProviderGraphQlService.class.getClassLoader()
                            .getResourceAsStream("graphql/" + filename + ".graphql")
                            .readAllBytes());
        } catch (IOException e) {
            return "";
        }

    }
}
