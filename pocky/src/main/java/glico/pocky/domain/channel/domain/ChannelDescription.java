package glico.pocky.domain.channel.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChannelDescription {

    private Long descriptionId;

    private String descriptionTextFirst;
    private String descriptionTextSecond;
    private String descriptionTextThird;

    private int isDeleted;

    private String createdAt;
    private String updatedAt;
}
