package com.akgarg.amazonclone.Controller;

import com.akgarg.amazonclone.entity.ResponseObject;
import com.akgarg.amazonclone.service.StripeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class MainController {
    private final StripeService stripeService;

    @Autowired
    public MainController(StripeService stripeService) {
        this.stripeService = stripeService;
    }

    @RequestMapping(value = "/payments/create/{total}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseObject> getClientSecretKey(@PathVariable("total") String amount) {
        String clientSecret = stripeService.generateClientSecret(Long.parseLong(amount));

        if (clientSecret.equals("")) {
            return ResponseEntity.status(206).body(new ResponseObject(null));
        } else {
            return ResponseEntity.status(201).body(new ResponseObject(clientSecret));
        }
    }
}