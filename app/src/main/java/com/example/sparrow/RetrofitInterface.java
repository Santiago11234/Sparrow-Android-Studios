package com.example.sparrow;


import java.util.HashMap;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface RetrofitInterface {
    @POST("/login")
    Call<LoginResult> excecuteLogin(@Body HashMap<String, String> map);

    @POST("/signup")
    Call<Void> excecuteSignup(@Body HashMap<String, String> map );
}
