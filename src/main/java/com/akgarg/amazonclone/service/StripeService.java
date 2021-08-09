package com.akgarg.amazonclone.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.stereotype.Service;

@Service
public class StripeService {

    @SuppressWarnings("SpellCheckingInspection")
    public String generateClientSecret(long amount) {
        // enter spripe api key here
        Stripe.apiKey = "stripe api key comes here";

        PaymentIntentCreateParams paymentParams =
                PaymentIntentCreateParams.builder()
                        .setAmount(amount)
                        .setCurrency("INR")
                        .addPaymentMethodType("card")
                        .build();

        PaymentIntent paymentIntent = null;

        try {
            paymentIntent = PaymentIntent.create(paymentParams);
        } catch (StripeException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }

        return paymentIntent != null ? paymentIntent.getClientSecret() : "";
    }
}