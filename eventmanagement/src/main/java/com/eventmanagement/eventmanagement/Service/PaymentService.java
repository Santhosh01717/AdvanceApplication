package com.eventmanagement.eventmanagement.Service;

import java.util.List;
import java.util.Optional;

import com.eventmanagement.eventmanagement.model.Payment;

public interface PaymentService {

    List<Payment> getAllPayments();

    Optional<Payment> getPaymentById(Long paymentId);

    Payment savePayment(Payment payment);

    void deletePayment(Long paymentId);
}
