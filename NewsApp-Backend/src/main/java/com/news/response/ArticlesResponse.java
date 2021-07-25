package com.news.response;


import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class ArticlesResponse {
	
	private String status;
    private int totalResults;
    private List<Articles> articles;
    
    
    

}
