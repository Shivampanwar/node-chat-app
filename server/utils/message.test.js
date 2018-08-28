var expect=require('expect')
var assert=require('assert')
var {generateMessage}=require('./message')

describe('generateMessage',()=>{
   it('should generate correct message object',()=>{
        // var obj={from:'shibu',surname:'panwar'}
        var from='jen'
        var text='some message'
        var message=generateMessage(from,text)
        expect(message.createdAt).toBeA('number')
        expect(message).toInclude({
            from,
            text
        })
        // assert.equal(generateMessage('shibu','panwar').from,'shibu')
        // done()
   })
})