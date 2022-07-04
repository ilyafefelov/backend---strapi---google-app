const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    let entity;
    console.log("ctx:", ctx);
    // return await strapi.services
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services["contact-form"].create(data, {
        files,
      });
    } else {
      entity = await strapi.services["contact-form"].create(ctx.request.body);
    }
    entity = await sanitizeEntity(entity, {
      model: strapi.models["contact-form"],
    });

    await strapi.plugins["email"].services.email
      .send({
        to: "illya@full-iron.online",
        from: "illya@full-iron.online",
        subject: "Contact form posted",
        // TODO: repond to
        text: `
        The comment #${entity.id} was posted to contact form.

        Content:
        ${JSON.stringify(entity, null, "\t")}
      `,
        html: `
          <div style="display: table; flex-direction: column;">
          <h2>Contact form #${entity.id} was posted from tetis.com</h2>

          <h5>From:</h5>
          <p>from (name): ${entity.name}</p>
          <p>phone: ${entity.phone}</p>
          <p>email: ${entity.email}</p>

          <h5>Message:</h5>
          <p style="font-size: 16px;
                background: #f1eee9;
                font-weight: 400;
                font-style: italic;
                padding: 0.8em;">
            ${entity.message}
          </p>

          <span style="left: 33%; position: relative;">-----------------------------------</span>
          <h6>Full data:</h6>
          <pre style="white-space: pre-line;
            tab-size: 2;
            background: #f8fcff;
            padding: 0.5em;
            margin-top: -1em;">
            ${JSON.stringify(entity, null, "\t")}
        </pre>
        </div>
      `,
      })
      .then(console.log("email sent. data"));

    return entity;
  },
};
