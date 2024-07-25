package glico.pocky.domain.kakao.dto;

import lombok.Data;
@Data
public class KakaoToken {

    private String access_token;
    private String token_type;
    private String refresh_token;
    private String scope;
    private String id_token;
    private int    expires_in;
    private int    refresh_token_expires_in;

}