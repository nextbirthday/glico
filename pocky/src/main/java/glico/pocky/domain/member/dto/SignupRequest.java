package glico.pocky.domain.member.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.ibatis.type.Alias;

@Getter
@Setter
@ToString
@Alias("signuprequest")
public class SignupRequest {

    private Long id;
    private String userid;
    private String password;
    private String name;
    private String birth;
    private String mobile;
    private String email;
    private String gender;

}
