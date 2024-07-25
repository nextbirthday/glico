package glico.pocky.domain.member.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.ibatis.type.Alias;

@Getter
@Setter
@ToString
@Alias("Member")
public class Member {

    private Long id;
    private String userid;
    private String password;
    private String name;
    private String birth;
    private String mobile;
    private String email;
    private String gender;

}
