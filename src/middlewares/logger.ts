const logger = async (resolve, parent, args, context, info) => {
    const next = await resolve(parent, args, context, info);
    console.log('Info', { parent, args, context, info });
    return next;
};

export { logger };
