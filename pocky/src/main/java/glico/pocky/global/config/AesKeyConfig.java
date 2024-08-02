package glico.pocky.global.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class AesKeyConfig {

    @Value("${aes.key}")
    private String aesKey;

    public String getAesKey() {
        return aesKey;
    }
}
