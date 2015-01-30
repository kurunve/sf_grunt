trigger TransactionTrigger on Transaction__c (before insert) {
    for (Transaction__c single_transaction : trigger.new){
        if (single_transaction.Transaction_GUID__c == null){
            
            single_transaction.Transaction_GUID__c = TransactionGuidGenerator.generateGuid();
           // system.assertEquals('iki',single_transaction.Transaction_GUID__c);
        }
    }
}