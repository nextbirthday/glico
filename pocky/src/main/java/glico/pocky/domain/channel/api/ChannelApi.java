package glico.pocky.domain.channel.api;

import glico.pocky.domain.channel.application.ChannelService;
import glico.pocky.domain.channel.domain.Channel;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Log4j2(topic = "channel")
@RestController
@RequestMapping("/channel")
public class ChannelApi {
    private final ChannelService channelService;

    @Autowired
    public ChannelApi(ChannelService channelService) {
        this.channelService = channelService;
    }

    @GetMapping("/list")
    public String channelHome() {
        return "pages/channel/channelList";
    }

    @GetMapping(value = "/insert")
    public String channelInsert() {
        return "channelList";
    }

    @GetMapping(value = "/update")
    public String channelUpdate() {
        return "channelList";
    }

    @PostMapping(value = "/item")
    public String channelItem(@RequestBody Channel channel) {
        return "channelList";
    }


}
