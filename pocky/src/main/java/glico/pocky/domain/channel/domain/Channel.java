package glico.pocky.domain.channel.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.ibatis.type.Alias;

@Getter
@Setter
@ToString
@Alias("Channel")
public class Channel {

    private Long channelId;
    private String channelTitle;
    private String channelSlug;
    private int isDeleted;
    private String createdAt;
    private String updatedAt;
}
