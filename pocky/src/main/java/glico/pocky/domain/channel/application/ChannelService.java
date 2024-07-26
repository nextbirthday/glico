package glico.pocky.domain.channel.application;

import glico.pocky.domain.channel.dao.ChannelDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChannelService {

    @Autowired
    private ChannelDao channelDao;


}
