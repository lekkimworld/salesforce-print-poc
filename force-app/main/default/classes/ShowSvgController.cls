public class ShowSvgController {
    @AuraEnabled(cacheable=true)
    public static String getSvg() {
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://shielded-castle-53358-66ecc2b45c83.herokuapp.com/svg');
        req.setMethod('GET');
        HttpResponse res = h.send(req);
        return res.getBody();
  }
}