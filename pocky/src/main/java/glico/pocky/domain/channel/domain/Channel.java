package glico.pocky.domain.channel.domain;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class Channel {
    private Long channel_id;
    private String channel_title;
    private String channel_slug;
    private String is_deleted;
}
